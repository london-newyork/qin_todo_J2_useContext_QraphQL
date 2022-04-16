import type { VFC } from "react";
import type { OnlyColors } from "src/components/type/types";
import { Color } from "src/components/type/types";

export type Headline = {
  name: string;
};

export const Headline: VFC<Headline & OnlyColors> = (props) => {
  return (
    //見出しコンポーネント(今日する)を作成
    <div className="m-4">
      <div>
        <h1
          className={`font-mono
              text-22px
              text-${Color[props.variant]}
            `}
        >
          {props.name}
        </h1>
      </div>
    </div>
  );
};
