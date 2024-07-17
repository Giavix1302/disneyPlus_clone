import styled from "styled-components";
import { onValue, ref } from "firebase/database";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { database } from "../../firebase";
import Contents from "./Contents";
import Content from "./Content";
import { setMovies, selectMovies } from "../../features/movie/movieSlide";
import { selectUserName } from "../../features/user/userSlice";
import store from '../../app/store'


function WrapperContent() {
    const dispatch = useDispatch()

    const movies = useSelector(selectMovies)

    useEffect(() => {
        const movies = ref(database, 'movies/');
        onValue(movies, (snapshot) => {
            const data = snapshot.val();
            handleAddMoviesInStore(data)
        });
        // eslint-disable-next-line
    }, [selectUserName])

    const handleAddMoviesInStore = (data) => {
        let recommend = []
        let newDisney = []
        let trending = []
        let original = []
        data.forEach(element => {
            switch (element.type) {
                case 'recommend':
                    recommend = [...recommend, element]
                    break
                case 'new':
                    newDisney = [...newDisney, element]
                    break
                case 'trending':
                    trending = [...trending, element]
                    break
                case 'original':
                    original = [...original, element]
                    break
                default:
            }
        });
        dispatch(setMovies({
            recommend: recommend,
            newDisney: newDisney,
            original: original,
            trending: trending,
        }))

        console.log(store.getState());
    }

    return (
        <Container>
            <Contents title="Recommended for you">
                {
                    movies && movies.recommend.map((movie) => {
                        return <Content
                            key={movie.id}
                            src={movie.cardImg}
                            to={"/detail/" + movie.id}
                        />
                    })
                }
            </Contents>
            <Contents title="New to Disney+">
                {
                    movies && movies.newDisney.map((movie) => {
                        return <Content
                            key={movie.id}
                            src={movie.cardImg}
                            to={"/detail/" + movie.id}
                        />
                    })
                }
            </Contents>
            <Contents title="Originals">
                {
                    movies && movies.original.map((movie) => {
                        return <Content
                            key={movie.id}
                            src={movie.cardImg}
                            to={"/detail/" + movie.id}
                        />
                    })
                }
            </Contents>
            <Contents title="Trending">
                {
                    movies && movies.trending.map((movie) => {
                        return <Content
                            key={movie.id}
                            src={movie.cardImg}
                            to={"/detail/" + movie.id}
                        />
                    })
                }
            </Contents>
        </Container>
    );
}

const Container = styled.div`
    padding: 0 0 26px;
`

export default WrapperContent;