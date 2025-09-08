import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Icon from "./Icon";

export default function SearchButton() {
  return (
    <button className="p-2 bg-gray-200 rounded">
      <Icon size="md" color="gray">
        <MagnifyingGlassIcon />
      </Icon>
    </button>
  );
}
