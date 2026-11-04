import Icon from "@mdi/react";

export function IconsTools(props: any) {
  return (
    <button onClick={props.onClick}>
      <Icon path={props.path} size={0.895} className={`cursor-pointer text-var-accessibility-header-icon`} />
    </button>
  );
}
