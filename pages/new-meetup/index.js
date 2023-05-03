import Head from "next/head";
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (meetup) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetup),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    router.push("/"); //shallow hota h mtlb it is not calling the getStaticProps , getInitialProps, and getServerSideProps bs url change kr dega.
    // router.replace(); we use it when we dont want that user go back to previous page.
  };

  return (
    <>
      <Head>
        <title>New Meetup</title>
        <meta
          name="description"
          content="Add your own meetup and create amazing networking opportunity !!!"
        ></meta>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetupPage;
