"use client";

import { Button } from "@/components/ui/button";

interface ActionButtonsProps {
  onCancel?: () => void;
  onSubmit?: () => void;
  onSend?: () => void;
}

export default function ActionButtons({ onCancel, onSubmit, onSend }: ActionButtonsProps) {
  return (
    <div className="max-w-[1134px] mx-auto flex flex-col sm:flex-row justify-end gap-2 py-5">
      <Button
        onClick={onCancel}
        className="w-full sm:w-[131px] h-[44px] flex items-center justify-center gap-[10px] 
        border border-[#2970FF] rounded-[5px] bg-white text-[#2970FF] font-medium py-[13px]"
      >
        Save draft
      </Button>

      <Button
        onClick={onSubmit}
        className="w-full sm:w-[131px] h-[44px] flex items-center justify-center gap-[10px] 
        border border-[#2970FF] rounded-[5px] bg-[#2970FF] text-white font-medium py-[13px]"
      >
        Create Invoice
      </Button>

      <Button
        onClick={onSend}
        className="w-full sm:w-[131px] h-[44px] flex items-center justify-center gap-[10px] 
        border border-[#2970FF] rounded-[5px] bg-white text-[#2970FF] font-medium py-[13px]"
      >
        Sent To Client
      </Button>
    </div>
  );
}
