"use client";

import { useParams, useSearchParams } from "next/navigation";
import { GetCookie, SetCookie } from "@/actions/projects/cookies";
import { useEffect, useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Loader2Icon } from "lucide-react";

import { useTimer } from "use-timer";
import CreateSupportLink from "@/actions/projects/thankyou-lootlabs";

export default function SupportUsDialog({
  title,
  id,
}: {
  title: string;
  id: string;
}) {
  const [Show, SetShow] = useState(true);
  const [Loading, SetLoading] = useState(false);

  const { time, start, pause, reset, status } = useTimer({
    initialTime: 120,
    timerType: "DECREMENTAL",
    endTime: 0,
  });

  const SearchParams = useSearchParams();
  const Params = useParams();

  useEffect(() => {
    GetCookie().then((R) => {
      if (!R) {
        SetShow(true);
      }
    });
  }, []);

  useEffect(() => {
    if (status === "STOPPED" && Loading) {
      SetCookie();
      SetShow(false);
      SetLoading(false);
    }
  }, [status]);

  return (
    <AlertDialog open={Show} onOpenChange={() => {}}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Complete our partners offer!</AlertDialogTitle>
          <AlertDialogDescription>
            Complete our partners offer and we will stop displaying this
            notification to you. You may be required to wait some time even
            after completing the offer.
          </AlertDialogDescription>
          <AlertDialogDescription>
            <b>
              Do not refresh the page. THE OFFER HAS BEEN CHECKED AND IS
              VIRUS-FREE.
            </b>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {Loading && (
            <AlertDialogCancel
              onClick={() => {
                window.open(
                  `https://trk.spycrow.site/kl6ixe?source=${id}&title=${title}`,
                  "authlink_offer",
                  "popup"
                );
              }}
            >
              Open Offer
            </AlertDialogCancel>
          )}
          <AlertDialogAction
            disabled={Loading}
            onClick={() => {
              SetLoading(true);
              window.open(
                `https://trk.spycrow.site/kl6ixe?source=${id}&title=${title}`,
                "authlink_offer",
                "popup"
              );

              start();

              setTimeout(() => {
                SetCookie();
                SetLoading(false);
                SetShow(false);
              }, 120000);
            }}
          >
            {" "}
            {Loading && (
              <Loader2Icon className="mr-2 mt-0.5 h-4 w-4 animate-spin" />
            )}
            {(status === "RUNNING" && "Please complete the offer.") ||
              "Go to the offer"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
