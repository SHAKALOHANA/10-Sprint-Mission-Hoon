import { useEffect, useState } from 'react';
import { getProducts } from '../../../api/itemApi';
import ItemCard from './ItemCard';
import SearchIcon from '../../../assets/images/icons/ic_search.svg?react';
import { Link } from 'react-router-dom';
import DropdownMenu from '../../../components/UI/DropdownMenu';
import PaginationBar from '../../../components/UI/PaginationBar';
import LoadingSpinner from '../../../components/UI/LoadingSpinner';
import ItemListType from '../../../types/itemListType';

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    // Mobile viewport
    return 4;
  } else if (width < 1280) {
    // Tablet viewport
    return 6;
  } else {
    // Desktop viewport
    return 10;
  }
};

function AllItemsSection() {
  const [orderBy, setOrderBy] = useState<string>('recent');
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(getPageSize());
  const [itemList, setItemList] = useState<ItemListType[]>([]);
  const [totalPageNum, setTotalPageNum] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchSortedData = async (orderBy: string, page: number, pageSize: number) => {
    setIsLoading(true);
    try {
      const products = await getProducts({ orderBy, page, pageSize });
      setItemList(products.list);
      setTotalPageNum(Math.ceil(products.totalCount / pageSize));
    } catch (error) {
      console.error('오류: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSortSelection = (sortOption: string) => {
    setOrderBy(sortOption);
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    // 화면 크기 변경할 때마다 pageSize를 다시 계산해 넣음
    window.addEventListener('resize', handleResize);
    fetchSortedData(orderBy, page, pageSize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [orderBy, page, pageSize]);

  const onPageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  return (
    <>
      <LoadingSpinner isLoading={isLoading} />

      <div>
        <div className='allItemsSectionHeader'>
          <h1 className='sectionTitle'>판매 중인 상품</h1>
          <Link to='/additem' className='loginLink button'>
            상품 등록하기
          </Link>
        </div>

        <div className='allItemsSectionHeader'>
          <div className='searchBarWrapper'>
            <SearchIcon />
            <input
              className='searchBarInput'
              placeholder='검색할 상품을 입력해 주세요'
            />
          </div>
          <DropdownMenu onSortSelection={handleSortSelection} />
        </div>

        <div className='allItemsCardSection'>
          {itemList?.map((item) => (
            <ItemCard item={item} key={`market-item-${item.id}`} />
          ))}
        </div>

        <div className='paginationBarWrapper'>
          <PaginationBar
            totalPageNum={totalPageNum}
            activePageNum={page}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </>
  );
}

export default AllItemsSection;
