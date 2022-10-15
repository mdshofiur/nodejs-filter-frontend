import styles from "./styles.module.css";

const Genre = ({ genres, filterGenre, setFilterGenre }) => {

  // console.log("genres", genres);
  // console.log("filterGenre", filterGenre);
  // console.log("setFilterGenre", setFilterGenre);

  const onChangeHandler = ({ currentTarget: input }) => {
    // if(input.checked){
    //   setFilterGenre([...filterGenre, input.value]);
    // } else {
    //   setFilterGenre(filterGenre.filter((genre) => genre !== input.value));
    // }

    if (input.checked) {
      const state = [...filterGenre, input.value];
      setFilterGenre(state);
    } else {
      const state = filterGenre.filter((val) => val !== input.value);
      setFilterGenre(state);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Filter By Genre</h1>
      <div className={styles.genre_container}>
        {genres.map((genre) => (
          <div className={styles.genre} key={genre}>
            <input
              className={styles.genre_input}
              type="checkbox"
              value={genre}
              onChange={onChangeHandler}
            />
            <p className={styles.genre_label}>{genre}</p>
          </div>
        ))}
      </div>
    </div>
    // <div className={styles.container}>
    //   <h1 className={styles.heading}>Filter By Genre</h1>
    //   <div className={styles.genre_container}>
    //     {genres?.map((genre, index) => (
    //       <div key={index} className={styles.genre}>
    //         <input
    //           className={styles.genre_input}
    //           type="checkbox"
    //           value={genre}
    //           onChange={onChangeHandler}
    //         />
    //         <p className={styles.genre_label}>Dark</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Genre;
