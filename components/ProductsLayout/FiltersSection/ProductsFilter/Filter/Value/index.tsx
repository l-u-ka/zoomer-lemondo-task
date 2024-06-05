import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ValueContainer } from "./styled";

interface Props {
  id: string;
  value: string;
}

export default function FilterValue({ id, value }: Props) {
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.checked);
    // if (router.isReady) {
    if (e.target.checked) {
      if (router.query.SpecificationIds) {
        const addedId = router.query.SpecificationIds;
        router.replace({
          query: { ...router.query, SpecificationIds: addedId + "," + id },
        });
      } else {
        router.replace({
          query: { ...router.query, SpecificationIds: id },
        });
      }
    } else {
      if (router.query.SpecificationIds) {
        const idsArr = (router.query.SpecificationIds as string).split(",");
        const newStr = idsArr
          .filter((querryId: string) => querryId !== String(id))
          .join(",");

        router.replace({
          query: { ...router.query, SpecificationIds: newStr },
        });
      }
    }
    //}
  };

  useEffect(() => {
    if (router.isReady) {
      // if (router.query.SpecificationIds?.includes(String(id))) {
      //   setChecked(true);
      // } else setChecked(false);
      if (router.query.SpecificationIds) {
        const idsArr = (router.query.SpecificationIds as string).split(",");
        if (idsArr.includes(String(id))) {
          setChecked(true);
        } else setChecked(false);
      } else setChecked(false);
    }
  }, [router]);

  return (
    <ValueContainer>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={id}>{value}</label>
    </ValueContainer>
  );
}
