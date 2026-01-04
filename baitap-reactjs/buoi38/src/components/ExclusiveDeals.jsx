import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ExclusiveDeals() {
  return (
    <div className="max-w-300 mx-auto my-10">
      <Tabs defaultValue="vegan">
        <div className="flex items-center justify-between mb-6">
          <p className="text-3xl font-bold">Up to -40%. Order.uk exclusive deals</p>
          <TabsList className="flex w-auto bg-white">
            <TabsTrigger
              value="vegan"
              className="data-[state=active]:border-amber-500
    data-[state=active]:text-amber-500 px-8 py-4 rounded-2xl cursor-pointer"
            >
              Vegan
            </TabsTrigger>
            <TabsTrigger
              value="sushi"
              className="data-[state=active]:border-amber-500
    data-[state=active]:text-amber-500 px-8 py-4 rounded-2xl cursor-pointer"
            >
              Sushi
            </TabsTrigger>
            <TabsTrigger
              value="fastfood"
              className="data-[state=active]:border-amber-500
    data-[state=active]:text-amber-500 px-8 py-4 rounded-2xl cursor-pointer"
            >
              Pizza & Fast Food
            </TabsTrigger>
            <TabsTrigger
              value="others"
              className="data-[state=active]:border-amber-500
    data-[state=active]:text-amber-500 px-8 py-4 rounded-2xl cursor-pointer"
            >
              others
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="vegan" className="flex justify-between gap-4">
          <a href="">
            <img src="/img/Group 10.png" alt="" />
          </a>
          <a href="">
            <img src="/img/Group 11.png" alt="" />
          </a>
          <a href="">
            <img src="/img/Group 12.png" alt="" />
          </a>
        </TabsContent>
        <TabsContent value="sushi" className="flex justify-between gap-4">
          <a href="">
            <img src="/img/Group 12.png" alt="" />
          </a>
          <a href="">
            <img src="/img/Group 11.png" alt="" />
          </a>
          <a href="">
            <img src="/img/Group 11.png" alt="" />
          </a>
        </TabsContent>
        <TabsContent value="fastfood" className="flex justify-between gap-4">
          <a href="">
            <img src="/img/Group 10.png" alt="" />
          </a>
          <a href="">
            <img src="/img/Group 10.png" alt="" />
          </a>
          <a href="">
            <img src="/img/Group 12.png" alt="" />
          </a>
        </TabsContent>
        <TabsContent value="others" className="flex justify-between gap-4">
          <a href="">
            <img src="/img/Group 12.png" alt="" />
          </a>
          <a href="">
            <img src="/img/Group 11.png" alt="" />
          </a>
          <a href="">
            <img src="/img/Group 10.png" alt="" />
          </a>
        </TabsContent>
      </Tabs>
    </div>
  );
}
