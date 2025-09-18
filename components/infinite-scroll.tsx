import React, {
  type PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { LoadingSpinner } from "@/components/loading-spinner";
import { throttle } from "@/lib/utils";

interface InfiniteScrollProps {
  onReachThreshold: () => void;
  hasMore?: boolean;
  loading?: boolean;
}

const InfiniteScroll: React.FC<PropsWithChildren<InfiniteScrollProps>> = ({
  children,
  onReachThreshold = () => null,
  loading = false,
  hasMore = true,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const handleTriggerThreshold = () => {
    if (!loading && hasMore) {
      onReachThreshold();
    }
  };

  const throttledOnReachThreshold = useMemo(
    () => throttle(handleTriggerThreshold, 2000),
    [loading, hasMore],
  );

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const sentinel = sentinelRef.current;

    if (!wrapper || !sentinel) return () => {};
    // Create Intersection Observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry?.isIntersecting && hasMore) {
          throttledOnReachThreshold();
        }
      },
      {
        root: null,
        threshold: 0.1,
      },
    );

    // Observe the sentinel element
    observerRef.current.observe(sentinel);

    // Cleanup observer on unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [onReachThreshold, hasMore, throttledOnReachThreshold]);

  return (
    <div ref={wrapperRef}>
      {children}

      {/* Sentinel element to trigger intersection */}
      <div
        ref={sentinelRef}
        style={{
          height: "1px",
          visibility: hasMore ? "visible" : "hidden",
        }}
      />

      {hasMore && loading && (
        <div className="flex items-center justify-center py-3">
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
};

export { InfiniteScroll };
