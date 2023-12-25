import classNames from "classnames";
import { MouseEventHandler, PropsWithChildren } from "react";

type ButtonType = "button" | "submit";
type ButtonSize = "small" | "medium" | "large";
type ButtonVariant = "primary" | "secondary";

interface IButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;

  //
  htmlType?: ButtonType;

  //
  block?: boolean;

  //
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

/**
 *
 */
export default function Button(props: PropsWithChildren<IButtonProps>) {
  const size = props.size ?? "medium";
  const variant = props.variant ?? "primary";
  const htmlType = props.htmlType ?? "button";

  return (
    <button
      className={classNames(
        "flex min-w-max flex-shrink-0 items-center justify-center transition duration-300 rounded-sm",
        props.block ? "w-full" : "max-w-fit",
        {
          "gap-4 border border-black bg-violet-600 px-5 text-gray-100 enabled:hober:border-white enabled:hover:bg-gray-400":
            variant === "primary",
          "gap-4 border border-gray-700 bg-gray-700 px-5 text-gray-100 enabled:hover:border-gray-600 enabled:hover:bg-gray-600 disabled:border-gray-700/80 disabled:bg-gray-700/80":
            variant === "secondary",
        },
        {
          "h-9": size === "small",
          "h-11": size === "medium",
          "h-14": size === "large",
        }
      )}
      onClick={props.onClick}
      type={htmlType}
    >
      {props.children}
    </button>
  );
}
