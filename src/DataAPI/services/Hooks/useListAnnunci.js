import { useQuery } from 'react-query'
import { getAnnunci } from '../API/AnnuncioServices';



const UseListAnnunci = () => {

    const { data, refetch } = useQuery(
        ['getAnnunci'],
        getAnnunci(),
        {
            refetchOnWindowFocus: false,
            retry: 0,
        },
    );

    const getUseList = () => refetch();

    return { data, getUseList };
};

export default UseListAnnunci;