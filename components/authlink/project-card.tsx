import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import numeral from "numeral";
import moment from "moment";
import { Badge } from "../ui/badge";

export default function ProjectCard({ Project }: { Project: StrippedProject }) {
  return (
    <Card className="relative max-w-sm min-w-96 min-h-56 mb-8 ml-4 mr-4 max-w-full">
      <a
        href={`/p/${Project.id}`}
        className="absolute left-0 top-0 z-0 h-full w-full"
      ></a>
      <CardHeader>
        <CardTitle>
          <span className="flex justify-between">
            <span>{Project.title}</span>
          </span>
        </CardTitle>
        <CardDescription className="text-pretty">
          {Project.description}
        </CardDescription>
        <CardDescription className="absolute text-pretty bottom-8 left-6">
          <span className="flex">
            <span className="mr-2">
              {numeral(Project.views).format("0,0")} Views
            </span>
            <span>{moment(Project.createdAt).calendar()}</span>
          </span>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}