import { FileText,MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ReactDiffViewer from 'react-diff-viewer';
// Sample diff content (you can later fetch these from API or props)
const oldCode = `
const a = 10
const b = 10
const c = () => console.log('foo')

if(a > 10) {
  console.log('bar')
}

console.log('done')
`;
const newCode = `
const a = 10
const boo = 10

if(a === 10) {
  console.log('bar')
}
`;

export default function Project() {
  return (
    <div className="flex h-screen p-6 flex-col gap-4">
      {/* Header */}
      <div className="flex justify-between">
        <div className="flex flex-10/12 flex-col">
            <div className="flex items-center">
            <FileText className="w-6 h-6 mr-1 text-gray-700" />
            <span className="scroll-m-20 text-2xl font-semibold tracking-tight mr-2">
                Integration.php
            </span>
            <Badge variant="destructive" className="text-xs">
                Critical
            </Badge>
            </div>
            <span className="text-xs text-muted-foreground">
            /modules/nucorelib/api/integration.php
            </span>
        </div>
        <div className="flex flex-2/12 justify-end">
            <Button>Save Changes</Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 gap-4">
        <div className="flex flex-1/4">
            <Card className="w-full rounded-sm">
                <CardHeader>
                    <CardTitle>Suggestions</CardTitle>
                    <CardDescription>
                        Solution suggested by static analyser's and AI.
                    </CardDescription>
                </CardHeader>
                {/* <Separator/> */}
                <CardContent>
                    {/* List of items */}
                    <Card className="rounded-sm">
                        <CardContent>
                            <div className="flex flex-col gap-1">
                                <span className="text-sm font-bold">arguments.count</span>
                                <span className="text-xs text-muted-foreground">Method modules_traacs_basic_Test::test() invoked with 0 parameters, 1 required.</span>
                            </div>
                            <Separator className="my-4"/>
                            <div className="flex justify-between">
                                <span className="text-xs">Line: 15</span>
                                <Button variant="outline"><MoveRight/></Button>
                            </div>
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>
        </div>
        <div className="flex flex-3/4">
            <Card className="w-full rounded-sm">
                <CardHeader>
                    <CardTitle>Code Diff</CardTitle>
                    <CardDescription>
                    Click on the file to get detailed information of the issue
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {/* <-- Diff here*/}
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
