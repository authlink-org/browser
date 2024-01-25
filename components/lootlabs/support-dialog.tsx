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

  const SearchParams = useSearchParams();
  const Params = useParams();

  function CheckHasCookie() {
    GetCookie().then((R) => {
      if (!R) {
        SetShow(true);
      } else {
        SetShow(false);
        SetCookie();
      }
    });
    setTimeout(CheckHasCookie, 5000);
  }

  useEffect(() => {
    CheckHasCookie();
  }, []);

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
            <b>Please finish the offer to continue.</b>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {Loading && (
            <AlertDialogCancel
              onClick={() => {
                window.open(
                  `https://trk.spycrow.site/1sr20u?source=${id}&title=${title}`,
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
                `https://trk.spycrow.site/1sr20u?source=${id}&title=${title}`,
                "authlink_offer",
                "popup"
              );
            }}
          >
            {" "}
            {Loading && (
              <Loader2Icon className="mr-2 mt-0.5 h-4 w-4 animate-spin" />
            )}
            {(status === "RUNNING" && "Waiting for offer..") ||
              "Go to the offer"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
