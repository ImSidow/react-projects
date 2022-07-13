import ThreeDotsIcon from "../../components/icons/ThreeDotsIcon";
import Progress from "../../components/ui/Progress";

export type userSocialMediaProgressesType = { name: string; avatarUrl: string; country: string; progressColor: string; progressContainerColor: string };

const UserSocialMediaProgressesCard = ({ name, avatarUrl, country, progressColor, progressContainerColor }: userSocialMediaProgressesType) => {
    return (
        <div className="bg-white h-64 drop-shadow-sm px-3 py-4 rounded-md">
            <div className="flex">
                <img className="w-12 h-12 rounded-full" src={avatarUrl} alt="Rounded avatar" />
                <div className="ml-3 mt-1">
                    <h1> {name}</h1>
                    <h5 className="text-sm text-gray-300"> {country} </h5>
                </div>
                <ThreeDotsIcon className="w-5 h-5 ml-auto text-gray-400" />
            </div>
            <div className="py-5 space-y-3.5">
                <Progress titleClass="text-black" title="Instagram" percentage={45} percentageText="65,376" percentageTextClass={`text-[${progressColor}]`} progressClass={`bg-[${progressColor}]`} progressContainerClass={`bg-[${progressContainerColor}]`} />
                <Progress titleClass="text-black" title="Facebook" percentage={32} percentageText="12,376" percentageTextClass={`text-[${progressColor}]`} progressClass={`bg-[${progressColor}]`} progressContainerClass={`bg-[${progressContainerColor}]`} />
                <Progress titleClass="text-black" title="Twitter" percentage={60} percentageText="132,376" percentageTextClass={`text-[${progressColor}]`} progressClass={`bg-[${progressColor}]`} progressContainerClass={`bg-[${progressContainerColor}]`} />
            </div>
        </div>
    );
};

export default UserSocialMediaProgressesCard;
