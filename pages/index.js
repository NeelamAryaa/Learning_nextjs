import { MongoClient } from "mongodb"; //ye client side ke bundle ka part nhi h
import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_VARIABLE = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     image: "https://picsum.photos/seed/picsum/200/300",
//     address: "Some address 5, 12345 Some City",
//     discription: "This is the first meetup !",
//   },
//   {
//     id: "m2",
//     title: "A Second Meetup",
//     image: "https://picsum.photos/seed/picsum/200/300",
//     address: "Some address 5, 12345 Some City",
//     discription: "This is the Second meetup !",
//   },
// ];

const Homepage = (props) => {
  return (
    <>
      <Head>
        <title>React Meetup</title>
        <meta
          name="description"
          content="Browser a huge list of highly active React Meetups !!!"
        ></meta>
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://neelam:root@cluster0.f8mzsqu.mongodb.net/meetupdb?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupCollection = db.collection("meetups");

  const meetups = await meetupCollection.find().toArray();

  client.close();

  return {
    // yaha se fetch request bhej skte the
    // pr nhi bhej rhe kyuki jarurat hi nhi h yahi db se data manga lo.

    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
      })),
    },
    revalidate: 1,
  };
};

export default Homepage;
