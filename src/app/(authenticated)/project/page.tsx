import React from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  AlertTriangle,
  Shield,
  CheckCircle,
  FileText,
  Clock,
  ArrowLeft,
  Users,
  Loader,
  XCircle,
} from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Project() {
  return (
    <div className="flex h-screen p-6">
      {/* Project */}
      <div className="flex flex-1 flex-col h-fit gap-4">
        {/* Header */}
        <div className="flex flex-col p-2">
          <span className="text-4xl font-bold">Traacs</span>
          <span className="text-sm text-gray-400">
            last scan : 08 June 2025
          </span>
        </div>
        <div className="flex bg-black rounded-lg px-6 py-8 md:w-[75%] flex-col text-white gap-2">
          <span className="text-lg font-bold">Project Overview</span>
          <div className="flex flex-1 flex-col gap-2">
            <div className="flex justify-between text-gray-400">
              <span className="text-xs">3,200/15,890 Files migrated</span>
              <span className="text-xs font-bold">35%</span>
            </div>
            <div className="flex flex-1 bg-gray-800 rounded-sm">
              <div className="flex w-[35%] h-4 bg-white rounded-sm"></div>
            </div>
          </div>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>Files</CardTitle>
                <CardDescription>
                Click on the file to get detailed information of the issue
                </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="critical" className="">
                <TabsList>
                  <TabsTrigger value="critical">
                    <div className="flex gap-2 justify-center items-center text-red-600">
                      <AlertTriangle />
                      <span>Critical Files</span>
                      <Badge
                        className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                        variant="destructive"
                      >
                        99
                      </Badge>
                    </div>
                  </TabsTrigger>
                  <TabsTrigger value="unsafe">
                    <div className="flex gap-2 justify-center items-center">
                      <Shield />
                      <span>Unsafe Files</span>
                      <Badge
                        variant="secondary"
                        className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                      >
                        6,700
                      </Badge>
                    </div>
                  </TabsTrigger>

                  <TabsTrigger value="safe">
                    <div className="flex gap-2 justify-center items-center text-green-700">
                      <CheckCircle />
                      <span>Safe Files</span>
                      <Badge
                        variant="secondary"
                        className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                      >
                        12,700
                      </Badge>
                    </div>
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="critical">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[20px]">#</TableHead>
                        <TableHead>File</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell className="cursor-pointer">
                            <div className="flex flex-1 py-2 gap-1 justify-between">
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-1">
                                        <FileText className="w-4 h-4"/>
                                        <span className="text-md font-bold">Integration.php</span>
                                    </div>
                                    <span className="text-xs text-muted-foreground">/modules/nucorelib/api/integration.php</span>
                                </div>
                                <div className="flex flex-col gap-2 items-end">
                                    <span><Badge className="text-xs">3 Issues</Badge></span>
                                    <span><Badge variant="outline" className="text-xs">14 Dependencies</Badge></span>
                                </div>
                                
                            </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>
              </Tabs>
            </CardContent>
        </Card>

        {/* Summary */}
        {/* <div className="flex flex-1 flex-col px-4 py-5 gap-3 items-center rounded-sm border-gray-200 border">
          <div className="flex justify-center gap-20">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">14,500</span>
              <span className="text-sm font-light text-gray-400">
                Files Scanned
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-red-500">260</span>
              <span className="text-sm font-light text-gray-400">
                Critical Files
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-orange-500">3,460</span>
              <span className="text-sm font-light text-gray-400">
                Unsafe Files
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-blue-400">2,300</span>
              <span className="text-sm font-light text-gray-400">
                Blocked files
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-green-500">8,300</span>
              <span className="text-sm font-light text-gray-400">
                Safe Files
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
