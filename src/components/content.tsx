import React, { useEffect, useState } from "react";
import { BasicTooltip } from "@nivo/tooltip";
import { Haappy } from "./myResponsiveBullet";
import { Haappy2 } from "./myResponsiveBullet2";

type MyFormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
  const [form, setForm] = useState({
    featureId: "",
    name: "",
    description: "",
  });
  const [showResults, setShowResults] = useState(false);

  const { featureId, name, description } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // 여기도 모르니까 any 로 하겠습니다.
    e.preventDefault();
    onSubmit(form);
    setForm({
      featureId: "",
      name: "",
      description: "",
    }); // 초기화
    setShowResults(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          // className="border-2 transition duration-500 placeholder-red-400 focus:placeholder-transparent border-red-400 w-4/12 py-2 text-center text-red-400 bg-transparent rounded-md focus:outline-none "
          name="featureId"
          value={featureId}
          onChange={onChange}
          placeholder="UP Number"
        />
        <input
          // className="border-2 transition duration-500 placeholder-red-400 focus:placeholder-transparent border-red-400 w-4/12 py-2 text-center text-red-400 bg-transparent rounded-md focus:outline-none "
          name="name"
          value={name}
          onChange={onChange}
          placeholder="Nexon"
        />
        <input
          // className="border-2 transition duration-500 placeholder-red-400 focus:placeholder-transparent border-red-400 w-4/12 py-2 text-center text-red-400 bg-transparent rounded-md focus:outline-none "
          name="description"
          value={description}
          onChange={onChange}
          placeholder="Value"
        />
        <button type="submit">등록</button>
      </form>
      {/* <div>{name}</div> */}
      {showResults ? <Haappy2 /> : <div>값이 없습니다.</div>}
    </div>
  );
}

export const Content: React.FC = () => {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return <MyForm onSubmit={onSubmit} />;
};
