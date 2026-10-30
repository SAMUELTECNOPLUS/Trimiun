import { Progress } from "@/components/ui/progress";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export default function RouteProgress() {
    const location = useLocation();

    const previousPath = useRef(location.pathname);

    const [progress, setProgress] = useState<number | null>(null);

    useEffect(() => {
        if (previousPath.current === location.pathname) return;

        previousPath.current = location.pathname;

        setProgress(10);

        const timer1 = setTimeout(() => setProgress(65), 50);
        const timer2 = setTimeout(() => setProgress(100), 350);
        const timer3 = setTimeout(() => setProgress(null), 600);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [location.pathname]);

    if (progress === null) return null;

    return (
        <div className="pointer-events-none fixed inset-x-0 top-0 z-50">
            <Progress
                value={progress}
                aria-label="Transición de página"
                className="h-1 rounded-none"
            />
        </div>
    );
}