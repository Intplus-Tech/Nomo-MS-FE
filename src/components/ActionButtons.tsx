"use client";

import { Button } from "@/components/ui/button";

interface ActionButtonsProps {
  onCancel?: () => void;
  onSubmit?: () => void;
  onSend?: () => void;
}

export default function ActionButtons({ onCancel, onSubmit, onSend }: ActionButtonsProps) {
  return (
    <div className="max-w-[1134px] mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 px-4 sm:px-0 py-5">
      <Button
        onClick={onCancel}
        className="w-full sm:w-[131px] h-[44px] flex items-center justify-center gap-2 
        border border-[#2970FF] rounded-md bg-white text-[#2970FF] font-medium transition-colors duration-200 hover:bg-[#2970FF]/10"
      >
        Save Draft
      </Button>

      <Button
        onClick={onSubmit}
        className="w-full sm:w-[131px] h-[44px] flex items-center justify-center gap-2 
        border border-[#2970FF] rounded-md bg-[#2970FF] text-white font-medium transition-colors duration-200 hover:bg-[#1E5BD7]"
      >
        Create Invoice
      </Button>

      <Button
        onClick={onSend}
        className="w-full sm:w-[131px] h-[44px] flex items-center justify-center gap-2 
        border border-[#2970FF] rounded-md bg-white text-[#2970FF] font-medium transition-colors duration-200 hover:bg-[#2970FF]/10"
      >
        Send To Client
      </Button>
    </div>
  );
}
