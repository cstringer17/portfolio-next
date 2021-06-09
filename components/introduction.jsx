import SocialSvg from "../public/blob-scene-haikei.svg";

export default function Introduction(){
  return(
    <div>
      <SocialSvg className="SocialSvg" />
      <style jsx>{`
        .SocialSvg{
          width: 100% !important;
        }
      `}
      </style>
    </div>
  );
}