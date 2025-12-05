import React from "react";
import Link from "next/link";
import Layout from "../src/components/Layout";
import SectionTitle from "../src/components/SectionTitle";
import ArrowRightIcon from "../src/icons/arrowRight";
import data from "../src/data";
import { useCheckedIds } from "../src/utilities/checklistsContext";
import s from "./index.module.css";

const HomeRoute = (props) => {
  const { t } = props;
  const keys = Object.keys(data);
  const items = keys.map((k) => data[k]);
  const { checkedIds } = useCheckedIds();

  const renderItem = (item) => {
    let total = 0;
    let completed = 0;

    item.sections.forEach((section) => {
      total += section.checklist.length;
      completed += section.checklist.filter((id) => {
        return checkedIds.includes(id);
      }).length;
    });

    return (
      <Link href={`/category/${item.id}/`} key={item.id}>
        <a className={s.listItem}>
          <SectionTitle
            title={t?.[item.id]?.title}
            key={item.id}
            total={total}
            completed={completed}
            completedLabel={t.core.completed}
          />
          <div className={s.arrowRight}>
            <ArrowRightIcon />
          </div>
        </a>
      </Link>
    );
  };

  return (
    <Layout t={t}>
      <div className={s.container}>
        <ul className={s.list}>{items.map(renderItem)}</ul>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const t = (await import(`../src/translations/en/index`)).default;

  return {
    props: { t },
  };
}

export default HomeRoute;
