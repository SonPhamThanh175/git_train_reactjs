import Album from '../Album';
import PropTypes from 'prop-types'
import './styles.scss';



AlbumList.prototype= {
    albumList : PropTypes.array.isRequired, 
};

function AlbumList({albumList}) {
    return (
        <ul className='album-list'>
            {albumList.map(album => (
                <li key={album.id}>
                    <Album album={album}/>
                </li>
            ))}
        </ul>
    )
}

export default AlbumList;