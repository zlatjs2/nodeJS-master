# NodeJS

## CRUD 

### Create

데이터를 생성하여 데이터베이스에 넣는 작업

```
INSERT INTO [테이블명]([컬럼1], [컬럼2], ...) VALUES([값1], [값2], ...)
```

## Read

데이터베이스에 있는 데이터를 조회하는 작업

```
SELECT * FROM [테이블명]

SELECT [컬럼명1], [컬럼명2], ... FROM [테이블명]

SELECT [컬럼명] FROM [테이블명]

SELECT [컬럼명1], [컬럼명2], ... FROM [테이블명] WHERE [조건1] AND [조건2]

SELECT [컬럼명1], [컬럼명2], ... FROM [테이블명] WHERE [조건1] OR [조건2]

SELECT * *FROM [테이블명] ORDER BY [컬럼명] [ASC|DESC]

SELECT * *FROM [테이블명] ORDER BY [컬럼명] [ASC|DESC] LIMIT [숫자]

...

```

### Update

데이터베이스에 있는 데이터를 수정하는 작업 

```
Update [테이블명] SET [컬럼명=바꿀 값] WHERE [조건]
```

### Delete

데이터베이스에 있는 데이터를 삭제하는 작업 

```
DELETE FROM [테이블명] WHERE [조건]
```
