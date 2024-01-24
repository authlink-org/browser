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

export default function SupportUsDialog() {
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
          <AlertDialogTitle>
            Download software from our Partner
          </AlertDialogTitle>
          <AlertDialogDescription>
            Download this software from our partner and use it for at least 2
            minutes to continue, the money from this offer will also be shared
            with the Publisher.
          </AlertDialogDescription>
          <AlertDialogDescription>
            <b>
              DO NOT REFRESH THE PAGE. THE OFFER IS VIRUS-FREE AND HAS BEEN
              CHECKED.
            </b>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            disabled={Loading}
            onClick={() => {
              SetLoading(true);
              window.open(
                "https://uy.basesfiles.com/getfile/WJPKIKK?title=Authlink%20Offer",
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
              "Download"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
