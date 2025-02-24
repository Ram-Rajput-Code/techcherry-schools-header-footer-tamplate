import FixedBannerReuseableComp from "../../../components/FixedBannerReuseableComp";

const Banner = () => {
  return (
    <>
      <FixedBannerReuseableComp
        imageUrl="/images/team.webp"
        heading="Welcome to Tech Cherry Schools"
        content="Providing the best computer education in Chhattisgarh."
      ></FixedBannerReuseableComp>
    </>
  );
};

export default Banner;
