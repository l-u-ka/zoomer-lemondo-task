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

  // hangle checkbox value change, if it is checked, send its id to SpecificationIds to url, if already exists add it to the string with "," like SpecificationIds=1,2,3
  // if it is unchecked, get SpecificationIds, find the id of the value in that string, remove it and send it back to the url again
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updateQuery = (newQuery: Record<string, any>) => {
      router.replace(
        {
          query: { ...router.query, ...newQuery },
        },
        undefined,
        { shallow: true }
      );
    };

    const addIdToQuery = () => {
      const existingIds = router.query.SpecificationIds
        ? `${router.query.SpecificationIds},`
        : "";
      updateQuery({ SpecificationIds: existingIds + id });
    };

    const removeIdFromQuery = () => {
      if (router.query.SpecificationIds) {
        const idsArr = (router.query.SpecificationIds as string).split(",");
        const newIds = idsArr
          .filter((queryId: string) => queryId !== String(id))
          .join(",");

        if (newIds) {
          updateQuery({ SpecificationIds: newIds });
        } else {
          delete router.query.SpecificationIds;
          updateQuery({});
        }
      }
    };

    if (e.target.checked) addIdToQuery();
    else removeIdFromQuery();
  };

  // for every query change, check the SpecificationIds query and set the value checked, if the id of the value is in the query
  useEffect(() => {
    if (router.isReady) {
      if (router.query.SpecificationIds) {
        const idsArr = (router.query.SpecificationIds as string).split(",");
        if (idsArr.includes(String(id))) setChecked(true);
        else setChecked(false);
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
