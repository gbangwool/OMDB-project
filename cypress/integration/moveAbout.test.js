// 메인 페이지로 접근한 후,
// Header About 내비게이션 버튼 클릭
// About 페이지 정보 확인
// Movie 페이지로 이동
// Header에 사용자 로고 클릭
// 다시 About 페이지 정보 확인

describe('About 페이지로 이동', () => {
  it('메인 페이지로 접근합니다.', () => {
    cy.visit('/')
    cy.get('header .nav-link.active')
      .contains('Search')
  })
  it('About 페이지로 이동합니다.', () => {
    cy.get('header .nav-link')
      .contains('About')
      .click()
    cy.url()
      .should('include', '/about')
    cy.wait(1000)
    cy.get('header .nav-link.active')
      .contains('About')
    cy.get('.name')
      .contains('gbangwool')
  })
  it('영화 상세 페이지로 이동합니다.', () => {
    cy.get('header .nav-link')
      .contains('Movie')
      .click()
    cy.url()
      .should('include','/movie')
  })
  it('다시 About 페이지로 이동합니다.', () => {
    cy.get('header .user')
      .click()
    cy.url()
      .should('include', '/about')
    cy.wait(1000)
    cy.get('header .nav-link.active')
      .contains('About')
    cy.get('.name')
      .contains('gbangwool')

  })
})