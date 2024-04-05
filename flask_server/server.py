from flask import Flask, request, jsonify
from flask_cors import CORS 
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer
import requests

# Download NLTK resources
nltk.download('punkt')
nltk.download('stopwords')
nltk.download('wordnet')

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for handling requests from React frontend

# Initialize WordNet Lemmatizer and stopwords
lemmatizer = WordNetLemmatizer()
stop_words = set(stopwords.words('english'))

# Function to preprocess user query
def preprocess_query(query):
    tokens = word_tokenize(query.lower())  # Tokenization and lowercasing
    tokens = [lemmatizer.lemmatize(word) for word in tokens if word not in stop_words]  # Lemmatization and removing stopwords
    return ' '.join(tokens)

# Function to search research papers
def search_research_papers(query):
    preprocessed_query = preprocess_query(query)
    # Example PubMed API request (replace with your actual API call)
    pubmed_api_url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term={preprocessed_query}&retmax=5&retmode=json"
    response = requests.get(pubmed_api_url)
    if response.status_code == 200:
        search_results = response.json()
        return search_results['esearchresult']['idlist']
    else:
        print("Error: Unable to fetch search results.")
        return []

# Function to retrieve abstracts and links for research papers
def get_abstracts_with_links(article_ids):
    abstracts_with_links = []
    for article_id in article_ids:
        # Example PubMed API request to retrieve article details (replace with your actual API call)
        pubmed_article_url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id={article_id}&retmode=xml"
        response = requests.get(pubmed_article_url)
        if response.status_code == 200:
            abstract, link = extract_abstract_and_link(response.content, article_id)
            abstracts_with_links.append({'abstract': abstract, 'link': link})
        else:
            print(f"Error: Unable to fetch details for article {article_id}.")
    return abstracts_with_links

# Function to extract abstract and link from XML response
def extract_abstract_and_link(xml_content, article_id):
    import xml.etree.ElementTree as ET
    tree = ET.ElementTree(ET.fromstring(xml_content))
    article = tree.find('.//PubmedArticle')
    abstract_element = article.find('.//AbstractText')
    if abstract_element is not None:
        abstract = abstract_element.text
    else:
        abstract = "Abstract not available."
    link = f"https://pubmed.ncbi.nlm.nih.gov/{article_id}"
    return abstract, link

# Define route to handle search requests
@app.route('/search', methods=['POST'])
def search():
    query = request.json['query']
    article_ids = search_research_papers(query)
    if article_ids:
        abstracts_with_links = get_abstracts_with_links(article_ids)
        return jsonify({'results': abstracts_with_links})
    else:
        return jsonify({'results': []})

if __name__ == '__main__':
    app.run(debug=True)
