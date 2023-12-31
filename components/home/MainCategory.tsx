import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MAIN_CATEGORI_BUTTON_ON } from "../../lib/utils/styles";
import { CATEGORY } from "@/lib/utils/constant";
import NavLink from "../common/NavLink";
import PhotoCardList from "../common/photoCardList";

const MainCategory = () => {
  const router = useRouter();
  const groupId = router.query.groupId;

  const [datas, setData] = useState<any>([]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("json")));
  }, [groupId]);

  return (
    <>
      <div className="p-10 pt-20 [text-align:-webkit-center]">
        <ul className="grid grid-cols-5 w-max">
          <li className={MAIN_CATEGORI_BUTTON_ON}>
            <NavLink href={`/groupview/allgroup`} as={`/groupview/allgroup`}>
              <span>전체보기</span>
            </NavLink>
          </li>
          {CATEGORY.map((group) => (
            <li className={MAIN_CATEGORI_BUTTON_ON}>
              <NavLink
                href={`/groupview/${group.engname}`}
                as={`/groupview/${group.engname}`}>
                <span>{group.korname}</span>
              </NavLink>
            </li>
          ))}
          <li className={MAIN_CATEGORI_BUTTON_ON}></li>
          <li className={MAIN_CATEGORI_BUTTON_ON}></li>
        </ul>
      </div>
      <PhotoCardList></PhotoCardList>
    </>
  );
};
export default MainCategory;
