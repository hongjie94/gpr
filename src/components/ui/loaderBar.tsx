"use client"

import { Progress } from "@/components/ui/progress"
import React, { useState, useEffect } from "react";

const LoaderBar = () => {
  const [progress, setProgress] = useState(13)
  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 300)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="w-100 flex justify-center items-center p-2 mt-4">
      <Progress value={progress} className="w-[30%]" />
    </div>
  )
}

export default LoaderBar