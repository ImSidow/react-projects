import UserSocialMediaProgressesCard, { userSocialMediaProgressesType } from "./UserSocialMediaProgressesCard";

const UserSocialMediaProgresses: userSocialMediaProgressesType[] = [
    {
        name: "Ava Gregoraci",
        country: "Bulgaria",
        avatarUrl: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
        progressColor: "#33B63A",
        progressContainerColor: "#E2FBD7",
    },
    {
        name: "Ava Gregoraci",
        country: "Bulgaria",
        avatarUrl: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
        progressColor: "#FE3A28",
        progressContainerColor: "#FFE5D3",
    },
    {
        name: "Ava Gregoraci",
        country: "Bulgaria",
        avatarUrl: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
        progressColor: "#4238F3",
        progressContainerColor: "#DBD7FF",
    },
];

export default function Index() {
    return (
        <>
            <h1 className="text-3xl font-semibold"> Be single minded </h1>
            <div className="grid grid-cols-3 gap-x-8 mt-5">
                {UserSocialMediaProgresses.map((progress) => (
                    <UserSocialMediaProgressesCard {...progress} />
                ))}
            </div>
        </>
    );
}
