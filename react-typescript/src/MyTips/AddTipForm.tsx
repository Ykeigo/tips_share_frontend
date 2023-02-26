import React, { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { MyTipsContext, MyTip } from "./MyTipsProvider";

export interface AddTipFormValues {
  Title: string;
  Description: string;
}

export function AddTipForm() {
  const { addTip } = useContext(MyTipsContext);

  const { register, handleSubmit } = useForm<AddTipFormValues>();
  const onSubmit: SubmitHandler<AddTipFormValues> = (data) => {
    addTip({
      id: "",
      tip: { title: data.Title, description: data.Description },
      helpful_num: 0,
      helped_today: false,
      forgot_today: false,
    });
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        タイトル
        <input
          {...register("Title", { required: true, maxLength: 50 })}
          placeholder="タイトルを追加..."
        />
      </label>
      <label>
        説明文
        <input
          {...register("Description", { maxLength: 500 })}
          placeholder="説明文を追加..."
        />
      </label>
      <input type="submit" />
    </form>
  );
}
