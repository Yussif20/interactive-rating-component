import { AiFillStar } from "react-icons/ai";

const Card = () => {
  return (
    <div className="w-1/4 p-7 bg-[--Dark-Blue] rounded-lg flex gap-6 flex-col">
      <AiFillStar className=" bg-[--light-Blue] rounded-full text-[--Orange] " />
      <h1 className="text-4xl">How did we do?</h1>
      <p className="text-[--Light-Grey]">
        Please let us know how we did with your support request.All feedback is
        appreciated to help us improve improve our offering!
      </p>
      <ul className="flex gap-3">
        <li className="bg-[--light-Blue] p-4 rounded-full">
          <button>1</button>
        </li>
        <li className="bg-[--light-Blue] p-4 rounded-full">
          <button>2</button>
        </li>
        <li className="bg-[--light-Blue] p-4 rounded-full">
          <button>3</button>
        </li>
        <li className="bg-[--light-Blue] p-4 rounded-full">
          <button>4</button>
        </li>
        <li className="bg-[--light-Blue] p-4 rounded-full">
          <button>5</button>
        </li>
      </ul>
      <button className="bg-[--Orange] rounded-full w-full  p-3">SUBMIT</button>
    </div>
  );
};

export default Card;
