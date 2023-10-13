# 사용자로부터 파일명 입력 받기
read -p "파일명을 입력하세요: " fileName
read -p "생성할 위치를 입력하세요(pages or Components): " location

# 폴더 생성
mkdir -p ./src/"$location"/"$fileName"

# 폴더 안에 파일 생성
touch ./src/"$location"/"$fileName"/"$fileName".tsx
touch ./src/"$location"/"$fileName"/"$fileName".module.css

echo "폴더와 파일이 성공적으로 생성되었습니다."
