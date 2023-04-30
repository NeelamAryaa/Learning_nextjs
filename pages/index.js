import MeetupList from "../components/meetups/MeetupList";

const DUMMY_VARIABLE = [
  {
    id: "m1",
    title: "A First Meetup",
    image: "https://picsum.photos/seed/picsum/200/300",
    address: "Some address 5, 12345 Some City",
    discription: "This is the first meetup !",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image: "https://picsum.photos/seed/picsum/200/300",
    address: "Some address 5, 12345 Some City",
    discription: "This is the Second meetup !",
  },
];

const Homepage = (props) => {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      meetups: DUMMY_VARIABLE,
    },
  };
};

export default Homepage;
