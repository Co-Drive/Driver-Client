import styled from 'styled-components';
import ListFilter from './ListFilter';
import SavedSolution from './SavedSolution';

const SAVED_DUMMY = {
  totalPage: 2,
  records: [
    {
      recordId: 0,
      title: '문제 풀이 제목',
      level: 1,
      tags: ['완전탐색'],
      platform: 'BAEKJOON',
      problemUrl: 'PROBLEM_URL',
      createdAt: '02.05',
    },
    {
      recordId: 1,
      title: '문제 풀이 제목',
      level: 1,
      tags: ['동적계획법 (Dynamic Programming)', '깊이 우선탐색 (DFS)'],
      platform: 'BAEKJOON',
      problemUrl: 'PROBLEM_URL',
      createdAt: '02.05',
    },
    {
      recordId: 2,
      title: '문제 풀이 제목',
      level: 1,
      tags: ['동적계획법 (Dynamic Programming)'],
      platform: 'BAEKJOON',
      problemUrl: 'PROBLEM_URL',
      createdAt: '02.05',
    },
    {
      recordId: 3,
      title: '문제 풀이 제목',
      level: 2,
      tags: ['정렬', '힙 (Heap)'],
      platform: 'BAEKJOON',
      problemUrl: 'PROBLEM_URL',
      createdAt: '02.05',
    },
    {
      recordId: 4,
      title: '문제 풀이 제목',
      level: 5,
      tags: ['깊이 우선탐색 (DFS)'],
      platform: 'BAEKJOON',
      problemUrl: 'PROBLEM_URL',
      createdAt: '02.05',
    },
    {
      recordId: 5,
      title: '문제 풀이 제목',
      level: 3,
      tags: ['구현', '탐욕법 (Greedy)'],
      platform: 'BAEKJOON',
      problemUrl: 'PROBLEM_URL',
      createdAt: '02.05',
    },
    {
      recordId: 6,
      title: '문제 풀이 제목',
      level: 2,
      tags: ['스택/큐', '해시'],
      platform: 'BAEKJOON',
      problemUrl: 'PROBLEM_URL',
      createdAt: '02.05',
    },
    {
      recordId: 7,
      title: '문제 풀이 제목',
      level: 1,
      tags: ['완전탐색', '너비 우선 탐색 (BFS)'],
      platform: 'BAEKJOON',
      problemUrl: 'PROBLEM_URL',
      createdAt: '02.05',
    },
    {
      recordId: 8,
      title: '문제 풀이 제목',
      level: 3,
      tags: ['완전탐색', '해시'],
      platform: 'BAEKJOON',
      problemUrl: 'PROBLEM_URL',
      createdAt: '02.05',
    },
  ],
};

const SavedSolutionList = () => {
  const { totalPage, records } = SAVED_DUMMY;

  return (
    <ListContainer>
      <ListFilter />
      {records.map((record) => {
        return <SavedSolution key={record.recordId} record={record} />;
      })}
    </ListContainer>
  );
};

export default SavedSolutionList;

const ListContainer = styled.section`
  display: flex;
  gap: 2.2rem;
  align-items: center;
  flex-direction: column;
  
  margin-top: 4.3rem;
`;
