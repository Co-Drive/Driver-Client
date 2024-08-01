import React from 'react';
import styled from 'styled-components';
import { CONTENTS } from '../constants/CommonBtn/BtnContent';
import { CommonButtonProps } from '../types/CommonBtn/BtnType';

const CommonButton = ({ isActive, category, onClick }: CommonButtonProps) => {
  return (
    <Button
      type="button"
      $category={category}
      $isActive={isActive}
      onClick={onClick}
    >
      {CONTENTS.map((content) => {
        return (
          category === content.category && (
            <React.Fragment key={content.category}>
              {category === 'group_create' && (
                <IconContainer>
                  {isActive ? content.icon_active : content.icon_disabled}
                </IconContainer>
              )}
              <BtnText $category={category} $isActive={isActive}>
                {content.text}
              </BtnText>
              {(category === 'group_direct' || category === 'link_copy') && (
                <IconContainer>{content.icon}</IconContainer>
              )}
            </React.Fragment>
          )
        );
      })}
    </Button>
  );
};

export default CommonButton;

const Button = styled.button<{ $category: string; $isActive?: boolean }>`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;

  padding: ${({ $category }) => {
    switch ($category) {
      case 'group_create':
        return '1rem 1.4rem';
      case 'group_direct':
        return '1.4rem 1.8rem 1.4rem 2.1rem';
      case 'link_copy':
        return '1rem 2rem';
      default:
        return '1.2rem 5.4rem';
    }
  }};

  border-radius: 0.8rem;
  background-color: ${({ theme, $isActive, $category }) => {
    if ($isActive || $category === 'group_direct')
      return theme.colors.codrive_green;
    return theme.colors.gray700;
  }};
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BtnText = styled.p<{ $category: string; $isActive?: boolean }>`
  ${({ theme, $category }) =>
    $category === 'group_direct'
      ? theme.fonts.title_bold_16
      : theme.fonts.title_bold_20}
  color: ${({ theme, $isActive, $category }) => {
    if ($isActive || $category === 'group_direct') return theme.colors.gray900;
    return theme.colors.gray300;
  }};
`;
