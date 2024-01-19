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

import CreateSupportLink from "@/actions/projects/thankyou-lootlabs";

export default function SupportUsDialog() {
  const [Show, SetShow] = useState(false);
  const [Loading, SetLoading] = useState(false);

  const SearchParams = useSearchParams();
  const Params = useParams();

  useEffect(() => {
    if (SearchParams.get("thank-you")) {
      SetCookie();
      return;
    }
    GetCookie().then((R) => {
      if (R != "supporter") {
        SetShow(true);
      }
    });
  }, []);

  return (
    <AlertDialog open={Show} onOpenChange={() => {}}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Support Us</AlertDialogTitle>
          <AlertDialogDescription>
            Complete our LootLabs.gg offer, and we will stop displaying this
            notification to you.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            disabled={Loading}
            onClick={() => {
              SetShow(false);
            }}
          >
            Ignore
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={Loading}
            onClick={() => {
              SetLoading(true);
              CreateSupportLink(String(Params.id)).then((Url) => {
                window.location.href = String(Url);
              });
            }}
          >
            {" "}
            {Loading && (
              <Loader2Icon className="mr-2 mt-0.5 h-4 w-4 animate-spin" />
            )}
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
