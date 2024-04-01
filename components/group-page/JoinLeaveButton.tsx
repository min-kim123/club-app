"use client";
import Link from "next/link";
import { Button } from "../ui/Button";
import { useMutation } from "@tanstack/react-query";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default function JoinLeaveButton(sectionId: string) {
  const supabase = createClientComponentClient<Database>({});

  const isMember = false;

  const { mutate: subscribe, isLoading: isSubLoading } = useMutation({
    mutationFn: async () => {
      const payload = {
        sectionId,
      };
      const { data } = await supabase
        .from("sections_users").insert([{sectionId: 'section_id', userId: 'user_id'}])


      return data as string;
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 401) {
          return loginToast();
        }
      }

      return toast({
        title: "There was a problem.",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      startTransition(() => {
        // Refresh the current route and fetch new data from the server without
        // losing client-side browser or React state.
        router.refresh();
      });
      toast({
        title: "Subscribed!",
        description: `You are now subscribed to r/${subredditName}`,
      });
    },
  });

  const { mutate: unsubscribe, isLoading: isUnsubLoading } = useMutation({
    mutationFn: async () => {
      const payload: SubscribeToSubredditPayload = {
        subredditId,
      };

      const { data } = await axios.post("/api/subreddit/unsubscribe", payload);
      return data as string;
    },
    onError: (err: AxiosError) => {
      toast({
        title: "Error",
        description: err.response?.data as string,
        variant: "destructive",
      });
    },
    onSuccess: () => {
      startTransition(() => {
        // Refresh the current route and fetch new data from the server without
        // losing client-side browser or React state.
        router.refresh();
      });
      toast({
        title: "Unsubscribed!",
        description: `You are now unsubscribed from/${subredditName}`,
      });
    },
  });
  return (
    <div>
      {isMember ? (
        <div>
          <Button
            className="w-full mt-1 mb-4"
            isLoading={isUnsubLoading}
            onClick={() => unsubscribe()}
          >
            Leave Group
          </Button>
        </div>
      ) : (
        <div>
          {/* if not part of group, have button send a join request to group  */}
          <Button
            className="w-full mt-1 mb-4"
            isLoading={isSubLoading}
            onClick={() => subscribe()}
          >
            Join to post
          </Button>
        </div>
      )}
    </div>
  );
}
