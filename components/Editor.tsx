"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SubmitHandler, useForm } from "react-hook-form";

interface PageProps {
  params: {
    groupSlug: string;
    universitySlug: string;
  };
}

type FormFields = {
  title: string;
  description: string;
};
export default function Editor({ params }: PageProps) {
  const supabase = createClientComponentClient<Database>();

  const { register, handleSubmit, setError, formState: {errors}} = useForm<FormFields>();
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log(data);
    try {
      const {data: insertedData, error} = await supabase.from('events').insert([
        {
          title: data.title,
          description: data.description,
        }
      ])
    } catch (error) {
      setError("")
    }
  };

  return (
    <div>
      <form id="subreddit-post-form" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title", {required: true,})} type="text" placeholder="title"/>{errors.title && (
        <div className="text-red-500">{errors.title.message}</div>
      )}
        <input {...register("description", {required: true,})} type="text" placeholder="description"/>

      </form>
      
    </div>
  );
}
