import Editor from "@/components/Editor";
import { Button } from "@/components/ui/Button";


interface PageProps {
  params: {
    groupSlug: string;
    universitySlug: string;
  };
}



export default function Page({ params }: PageProps) {



  return (
    <div>
      <div>Create New Event</div>
      <Editor params={params} />
      <div className='w-full flex justify-end'>
        <Button type='submit' className='w-full' form='subreddit-post-form'>
          Create
        </Button>
      </div>
    </div>
  );
}
