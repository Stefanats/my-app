import { User } from "../redux/users/reducer";

type GamesType = { name: string; scoredPoints: number }[];

const checkAverageScore = (games: GamesType): Number => {
    const average = games.reduce((avg, value, _, { length }) => {
        return avg + value.scoredPoints / length;
    }, 0);
    return Math.round(average);
};

const filterUsers = (users: User[], filter: any): User[] => {
    return users.filter((user: User) => {
        const averageScore = checkAverageScore(user.games);
        return (
            (!filter.min || filter.min <= averageScore) &&
            (!filter.max || filter.max >= averageScore) &&
            (filter.status == null || user.status === filter.status)
        );
    });
};

const searchUsers = (users: User[], search: string): User[] => {
    return users.filter((user: User) => {
        const firstName = user.firstName.toLowerCase();
        const lastName = user.lastName.toLowerCase();
        const fullName = `${firstName} ${lastName}`;

        return !!!search || fullName.includes(search);
    });
};

const getUniqueId = (users: User[]): number => {
    const userWithBiggestId = users.reduce(
        (accumulator: User, item: User): User => {
            return item.id > accumulator.id ? item : accumulator;
        }
    );
    return userWithBiggestId.id + 1;
};

const reduceNameSize = (name: string): string => {
    if (name.length > 7) return `${name.slice(0, 7)}...`;
    else return name;
};

export {
    checkAverageScore,
    filterUsers,
    searchUsers,
    getUniqueId,
    reduceNameSize,
};
