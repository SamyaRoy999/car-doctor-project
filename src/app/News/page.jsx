"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const Page = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/newsData/newsData.json")
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
        setLoading(false);
      })
      .catch((error) => console.error("ডেটা ফেচ করতে সমস্যা:", error));
  }, []);

  if (loading) {
    return <p>লোড হচ্ছে...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {news.map((item, index) => (
        <Card key={index} className="w-[350px]">
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>
              <Image
                src={item.img}
                height={200}
                width={200}
                alt={item.title}
                priority
              />
              <p>{item.description}</p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <small>{item.time}</small>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Page;
