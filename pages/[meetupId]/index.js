import MeetupDetail from "../../components/meetups/MeetupDetail";
const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://picsum.photos/seed/picsum/200/300"
      title="The First Meetup"
      address="Some Address 5, Some City"
      description="The Meetup Description"
    />
  );
};

// when url change to yaha se id le lega
export const getStaticPaths = async () => {
  return {
    fallback: false, //true - when some meetupId is mentioned here. and False when all are mentioned here
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  // fetch data for single detail

  const meetupid = context.params.meetupId; //during build process
  console.log(meetupid);
  return {
    props: {
      meetupData: {
        image: "https://picsum.photos/seed/picsum/200/300",
        id: meetupid,
        title: "The First Meetup",
        address: "Some Address 5, Some City",
        description: "The Meetup Description",
      },
    },
  };
};

export default MeetupDetails;
