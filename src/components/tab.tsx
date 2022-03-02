import { Link } from "react-router-dom";
import { BooleanLiteral } from "typescript";

interface ITab {
  text: string;
  isActive: boolean;
  link: string;
}

function TabComponents({ text, isActive, link }: ITab) {
  return (
    <li className="mr-2">
      <Link to={link}>
        <div
          className={
            isActive
              ? "inline-block py-4 px-4 text-sm font-medium text-center text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
              : "inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          }
        >
          {text}
        </div>
      </Link>
    </li>
  );
}

export default TabComponents;
