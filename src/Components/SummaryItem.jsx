import IconReaction from "./IconReaction";
import IconMemory from "./IconMemory";
import IconVerbal from "./IconVerbal";
import IconVisual from "./IconVisual";

const SummaryItem = ({ id, liColor, text, textColor, score }) => {
  const renderSwitch = (id) => {
    switch (id) {
      case 1:
        return <IconReaction />;
        break;
      case 2:
        return <IconMemory />;
        break;
      case 3:
        return <IconVerbal />;
        break;
      default:
        return <IconVisual />;
    }
  };
  return (
    <li
      className={
        liColor ? `${liColor} rounded-xl flex p-3` : `rounded-xl flex p-3`
      }
    >
      {renderSwitch(id)}
      <p
        className={textColor ? `${textColor} ml-3 font-bold` : `ml-3 font-bold`}
      >
        {text}
      </p>
      <p className="ml-auto text-pro-dark-grayblue">
        {score} <span className="text-pro-dark-grayblue/70">/ 100</span>
      </p>
    </li>
  );
};
export default SummaryItem;
