import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const ForgetPasswordLoading = () => {
  return (
    <div className="flex h-screen items-center justify-center align-middle overflow-y-hidden">
      <Card className="w-[400px]">
        <CardHeader className="space-y-2">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-2/3" />
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Form Fields Skeleton */}
          <div className="space-y-4">
            {/* Email Field */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>

          {/* Button Skeleton */}
          <Skeleton className="h-11 w-full" />
        </CardContent>
      </Card>
    </div>
  );
};
export default ForgetPasswordLoading;
