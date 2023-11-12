import { Helmet } from "react-helmet";

type MetaProps = {
  title: string;
  description: string;
  keywords: string;
  author?: string;
};

const Meta = ({ title, description, keywords, author }: MetaProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
      <meta name="author" content={author} />
    </Helmet>
  );
};

export default Meta;
