import Text from "./components/text";
import TrashIcon from "./assets/icons/trash.svg?react";
import CheckIcon from "./assets/icons/check.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import PencilIcon from "./assets/icons/pencil.svg?react";
import XIcon from "./assets/icons/x.svg?react";
import Icon from "./components/icon";
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import InputText from "./components/input-text";

export function App() {
  return (
    <>
      <div className="grid gap-10">
        <div className="flex flex-col gap-1">
          <Text variant="body-md-bold" className="text-pink-base">
            Ola mundo
          </Text>
        </div>
      </div>

      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="fill-pink-base" />
        <Icon svg={CheckIcon} className="fill-pink-base" />
        <Icon svg={PlusIcon} className="fill-pink-base" />
        <Icon svg={SpinnerIcon} className="fill-pink-base" />
        <Icon svg={PencilIcon} className="fill-pink-base" />
        <Icon svg={XIcon} className="fill-pink-base" />
        Delete
      </div>

      <div>
        <Badge variant="secondary">5</Badge>
        <Badge variant="primary">2 de 5</Badge>
      </div>
      <div>
        <Button icon={PlusIcon}>Nova tarefa</Button>
      </div>
      <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon} disabled />
        <ButtonIcon icon={TrashIcon} variant="secondary" />
        <ButtonIcon icon={TrashIcon} variant="tertiary" />
      </div>
      <div>
        <InputText />
      </div>
    </>
  );
}

export default App;
