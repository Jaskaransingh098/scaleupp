import * as React from "react";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

// BGPattern Component
type BGVariantType =
  | "dots"
  | "diagonal-stripes"
  | "grid"
  | "horizontal-lines"
  | "vertical-lines"
  | "checkerboard";
type BGMaskType =
  | "fade-center"
  | "fade-edges"
  | "fade-top"
  | "fade-bottom"
  | "fade-left"
  | "fade-right"
  | "fade-x"
  | "fade-y"
  | "none";

type BGPatternProps = React.ComponentProps<"div"> & {
  variant?: BGVariantType;
  mask?: BGMaskType;
  size?: number;
  fill?: string;
};

const maskClasses: Record<BGMaskType, string> = {
  "fade-edges":
    "[mask-image:radial-gradient(ellipse_at_center,var(--background),transparent)]",
  "fade-center":
    "[mask-image:radial-gradient(ellipse_at_center,transparent,var(--background))]",
  "fade-top":
    "[mask-image:linear-gradient(to_bottom,transparent,var(--background))]",
  "fade-bottom":
    "[mask-image:linear-gradient(to_bottom,var(--background),transparent)]",
  "fade-left":
    "[mask-image:linear-gradient(to_right,transparent,var(--background))]",
  "fade-right":
    "[mask-image:linear-gradient(to_right,var(--background),transparent)]",
  "fade-x":
    "[mask-image:linear-gradient(to_right,transparent,var(--background),transparent)]",
  "fade-y":
    "[mask-image:linear-gradient(to_bottom,transparent,var(--background),transparent)]",
  none: "",
};

function geBgImage(variant: BGVariantType, fill: string, size: number) {
  switch (variant) {
    case "dots":
      return `radial-gradient(${fill} 1px, transparent 1px)`;
    case "grid":
      return `linear-gradient(to right, ${fill} 1px, transparent 1px), linear-gradient(to bottom, ${fill} 1px, transparent 1px)`;
    case "diagonal-stripes":
      return `repeating-linear-gradient(45deg, ${fill}, ${fill} 1px, transparent 1px, transparent ${size}px)`;
    case "horizontal-lines":
      return `linear-gradient(to bottom, ${fill} 1px, transparent 1px)`;
    case "vertical-lines":
      return `linear-gradient(to right, ${fill} 1px, transparent 1px)`;
    case "checkerboard":
      return `linear-gradient(45deg, ${fill} 25%, transparent 25%), linear-gradient(-45deg, ${fill} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${fill} 75%), linear-gradient(-45deg, transparent 75%, ${fill} 75%)`;
    default:
      return undefined;
  }
}

const BGPattern = ({
  variant = "grid",
  mask = "none",
  size = 24,
  fill = "#252525",
  className,
  style,
  ...props
}: BGPatternProps) => {
  const bgSize = `${size}px ${size}px`;
  const backgroundImage = geBgImage(variant, fill, size);

  return (
    <div
      className={cn(
        "absolute inset-0 z-[-10] size-full",
        maskClasses[mask],
        className
      )}
      style={{
        backgroundImage,
        backgroundSize: bgSize,
        ...style,
      }}
      {...props}
    />
  );
};

// Table Components
const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn(className)} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-semibold text-foreground [&:has([role=checkbox])]:w-px [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
      className
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "p-4 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
      className
    )}
    {...props}
  />
));
TableCell.displayName = "TableCell";

// Data Types
interface ComparisonRow {
  feature: string;
  genericAgency: string;
  socialSelling: string;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "Approach",
    genericAgency: "Random content → hope it works",
    socialSelling: "Systemized funnel → content that sells",
  },
  {
    feature: "Process",
    genericAgency: "Endless back-and-forth",
    socialSelling: "Scripts, funnels, edits — zero friction",
  },
  {
    feature: "Output",
    genericAgency: "Pretty videos, no ROI",
    socialSelling: "Authority-driven content that converts",
  },
  {
    feature: "Founder's Role",
    genericAgency: "Micro-manage editors",
    socialSelling: "Record 1–2 hrs/month, done",
  },
  {
    feature: "Focus",
    genericAgency: "Views & likes",
    socialSelling: "Booked calls & revenue",
  },
  {
    feature: "Lead Gen",
    genericAgency: "None",
    socialSelling: "10–15 warm calls/month",
  },
  {
    feature: "Scalability",
    genericAgency: "Stops when you stop",
    socialSelling: "Funnel runs on autopilot",
  },
  {
    feature: "Accountability",
    genericAgency: "Excuses when flat",
    socialSelling: "We work till it delivers",
  },
];

// Main Component
function whyChart() {
  return (
    <div className="relative min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8">
      {/* <BGPattern variant="grid" mask="fade-edges" size={32} fill="#1a1a1a" /> */}

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          {/* <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            WHY US — COMPARISON
          </h2> */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Difference Is{" "}
            <span className="bg-[linear-gradient(to_right,#d38312,#a83279)] bg-clip-text text-transparent">
              Clear
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Agencies make content. We make clients.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-background/50 backdrop-blur-sm overflow-hidden relative shadow-2xl z-20">
          <Table className="bg-transparent z-20">
            <TableHeader>
              <TableRow className="border-b-2 border-border hover:bg-transparent">
                <TableHead className="w-1/3 text-2xl p-6">Feature</TableHead>
                <TableHead className="w-1/3 text-base text-left">
                  <th className="flex items-center gap-1">
                    <X className="h-10 w-10 text-red-500" />
                    <span className="text-2xl">Generic Agency</span>
                  </th>
                </TableHead>
                <TableHead className="w-auto text-2xl flex items-center gap-2 pt-7 whitespace-nowrap">
                  <Check className="h-10 w-10 text-emerald-500" />
                  <span>The Social Selling System™</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row, index) => (
                <TableRow
                  key={row.feature}
                  className={cn(
                    "border-border transition-all duration-200",
                    index % 2 === 0 ? "bg-muted/20" : "bg-transparent"
                  )}
                >
                  <TableCell className="font-semibold text-foreground">
                    {row.feature}
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    <div className="flex items-center justify-left gap-2">
                      <X className="h-4 w-4 text-red-500 flex-shrink-0" />
                      <span className="text-sm">{row.genericAgency}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center text-foreground">
                    <div className="flex items-center justify-left gap-2">
                      <Check className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm font-medium">
                        {row.socialSelling}
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-8 text-center">
          {/* <p className="text-sm text-muted-foreground italic">
            Agencies make content. We make clients.
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default whyChart;
